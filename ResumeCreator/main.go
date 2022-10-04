package main

import (
	u "Golang-HTML-TO-PDF-Converter/pdfGenerator"
	"fmt"
	"net/http"
	"text/template"
	"io"
	"os"
)

func main() {
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/generator/", viewCodeHandler)
	http.ListenAndServe(":8080", nil)
}

type Page struct {
	Title string
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	p := Page{Title: "QR Code Generator"}

	t, _ := template.ParseFiles("index.html")
	t.Execute(w, p)
}

func viewCodeHandler(w http.ResponseWriter, r *http.Request) {
	dataString := r.FormValue("dataString")
	Mobi := r.FormValue("Mobi")
	Email := r.FormValue("mail")

	v := u.NewRequestPdf("")

	//html template path
	templatePath := "templates/sample.html"

	//path for download pdf
	outputPath := "storage/example.pdf"

	//html template data
	templateData := struct {
		//Title       string
		Name    string
		Mobi    string
		Email   string
		Country string
	}{
		//Title:       ,
		Name:    dataString,
		Mobi:    Mobi,
		Email:   Email,
		Country: "Germany",
	}

	if err := v.ParseTemplate(templatePath, templateData); err == nil {
		ok, _ := v.GeneratePDF(outputPath)
		fmt.Println(ok, "pdf generated successfully")
	} else {
		fmt.Println(err)
	}

	f, err := os.Open(outputPath)
    if err != nil {
        fmt.Println(err)
        w.WriteHeader(500)
        return
    }
    defer f.Close()

    //Set header
    w.Header().Set("Content-type", "application/pdf")

    //Stream to response
    if _, err := io.Copy(w, f); err != nil {
        fmt.Println(err)
        w.WriteHeader(500)
    }

}

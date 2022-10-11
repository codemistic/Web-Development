responses=["Welcome to SMART CALCULATOR","My Name is Calci","Thanks","Sorry,this is beyond my ability"]

def extract_numbers_from_text(text):
    l=[]
    for t in text.split(' '):
        try:
            l.append(float(t))
        except ValueError:
            pass
    return(l)


def add(a,b):
    return a+b
def sub(a,b):
    return a-b
def mul(a,b):
    return a*b
def div(a,b):
    return a/b

def myName():
    print(responses[1])
def sorry():
    print(responses[3])
def end():
    print(responses[2])
    input("Press Enter key to exit")
    exit()
def help():
    print("List of Valid Commands")
    for k in operations:
        print(k)
    for k in commands:
        print(k)

#--------------------------------Operations dictionary----------------------------------
operations={
    "PLUS":add,"ADD":add,"SUM":add,"ADDITION":add,"+":add,
    "MINUS":sub,"SUBTRACT":sub,"SUBTRACTION":sub,"DIFFERENCE":sub,"-":sub,
    "MULTIPLY":mul,"PRODUCT":mul,"MULTIPLICATION":mul,"*":mul,
    "DIVIDE":div,"DIVISION":div,"/":div
    }

#---------------------------------Commands dictionary------------------------------------
commands={
    "NAME":myName,
    "END":end,
    "EXIT":end,
    "CLOSE":end,
    "EXIT":end,
    "HELP":help,
    }
#----------------------------------------main()--------------------------------------
def main():
    print(responses[0],responses[1],sep='\n')
    while True:
        print()
        text=input("Enter some text: ")
        for word in text.split(' '):
            if word.upper() in operations.keys():
                try:
                    l=extract_numbers_from_text(text)
                    r=operations[word.upper()](l[0],l[1])
                    print(r)
                except:
                    print("Something is wrong,Please retry !!!")
                finally:
                    break

            elif word.upper() in commands.keys():
                commands[word.upper()]()
                break
        else:
            sorry()
if __name__=="__main__":
    main()
        
    
        
        
        

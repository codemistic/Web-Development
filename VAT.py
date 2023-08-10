def calculate_vat(price, vat_rate):
    vat_amount = price * (vat_rate / 100)
    total_price = price + vat_amount
    return vat_amount, total_price

def main():
    try:
        price = float(input("Enter the price: "))
        vat_rate = float(input("Enter the VAT rate (%): "))
        
        vat_amount, total_price = calculate_vat(price, vat_rate)
        
        print(f"Price: ${price:.2f}")
        print(f"VAT Rate: {vat_rate:.2f}%")
        print(f"VAT Amount: ${vat_amount:.2f}")
        print(f"Total Price: ${total_price:.2f}")
        
    except ValueError:
        print("Invalid input. Please enter valid numbers.")

if __name__ == "__main__":
    main()

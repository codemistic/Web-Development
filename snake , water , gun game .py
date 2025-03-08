# snake , water , gun game
import random
computer = random.choice([1, 0, -1])

x = input("Enter 's' for snake, 'w' for water, 'g' for gun: ")

def youstr(x):
    you_dict = {"s": -1, "w": 1, "g": 0}
    reverse_dict = {-1: "snake", 1: "water", 0: "gun"}
    you = you_dict[x]
    return you, reverse_dict

you, reverse_dict = youstr(x)

print(f"You choose {reverse_dict[you]}\nComputer choose {reverse_dict[computer]}")

if (computer == you):
    print("Draw🫡")
    
else:
    if (computer == -1 and you == 1) :
        print("You win🎉")
    elif (computer == -1 and you == 0) :
        print("You lose😭")
    elif (computer == 1 and you == 0):
        print("You win🎉")
    elif (computer == 1 and you == -1):
        print("You lose😭")
    elif (computer == 0 and you == -1):
        print("You win🎉")
    elif (computer == 0 and you == 1):
        print("You lose😭")
test = int(input())

for _ in range(test):
    inputs = list(input())
    stack = []
    bool = True

    for i in range(len(inputs)):
        if inputs[i] == '(':
            stack.append(inputs[i])
        else:
            if len(stack) == 0:
                bool = False
                break
            else:
                stack.pop()
    if bool:
        if len(stack) != 0:
            print("NO")
        else:
            print("YES")
    else:
        print("NO")
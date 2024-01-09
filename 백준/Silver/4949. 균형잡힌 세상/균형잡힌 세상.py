while True:
    s = input()
    if s == '.':
        break
    bracket = []
    temp = True
    for i in s:
        if i == '(' or i == '[':
            bracket.append(i)
        elif i == ')':
            if not bracket or bracket[-1] == '[':
                temp = False
                break
            elif bracket[-1] == '(':
                bracket.pop()
        elif i == ']':
            if not bracket or bracket[-1] == '(':
                temp = False
                break
            elif bracket[-1] == '[':
                bracket.pop()
    if temp == True and not bracket:
        print('yes')
    else:
        print('no')

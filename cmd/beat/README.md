# BEAT

## ...
```
use <req>
use <file>

req.http.get("https://asdasd")
req.http.post("ssss")

data {
    fn1 -> fn2 -> fn3
    fn1 -> fn2 -> fn3
    fn1 -> fn2 -> fn3
    // return [a,b,c]
} -> fn4

fn1():
    ....
    return a

fn2(e0):
    ....
    return a,b

fn3(e0,e1):
    ....
    return a,b,c

fn4(e0):
    for item in e0:
        print(item)

multiple {
    fn1 -> fn2 -> fn3
    fn1 -> fn2 -> fn3
    fn1 -> fn2 -> fn3
    // return [a,b,c]
} -> fn4

goto (e){
    e :
        out 0
    e > 0 :
        out 1
}
```
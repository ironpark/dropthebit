package main

import (
	"encoding/json"
	"os"
	"time"

	"github.com/alecthomas/participle"
)
/*
	[source]
 		value.1 = ""
		value.2 = ""
		return {
			request(a)->
			sss->
			ddd->
			sss
		}

 */

//Root of the AST
type Beat struct {
	Expression *Expression `'(' @@ ')'`
}

type Property struct {
	Key string `@Ident "="`
}

type Value struct {
	String *string    `  @String`
	Number *float64   `| @Float`
	Date   *time.Time `| @Date`
}

func main() {
	parser, err := participle.Build(&EBNF{})
	if err != nil {
		panic(err)
	}

	ebnf := &EBNF{}
	err = parser.Parse(os.Stdin, ebnf)
	if err != nil {
		panic(err)
	}

	json.NewEncoder(os.Stdout).Encode(ebnf)
}

package main

import (
	"gopkg.in/urfave/cli.v1"
	"log"
	"os"
)

func main() {
	app := cli.NewApp()
	app.Name = "Drop The Bit"
	app.Usage = "Drop The Bit!"
	app.Description = "DropTheBit is Universal data crawler"
	app.Version = "0.0.1"
	app.Action = ApiServe

	app.Flags = []cli.Flag{
		cli.BoolFlag{
			Name:  "debug, d",
			Usage: "start debug mode",
			Hidden: false,
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		log.Fatal(err)
	}
}

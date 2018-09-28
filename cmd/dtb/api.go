package main

import (
	"github.com/gin-gonic/gin"
	"go/build"
	"gopkg.in/urfave/cli.v1"
	"os"
)

func gopath() string {
	path := os.Getenv("GOPATH")
	if path == "" {
		path = build.Default.GOPATH
	}
	return path
}

func ApiServe(c *cli.Context) error {
	if c.Bool("debug") {
		gin.SetMode(gin.DebugMode)
	}else{
		gin.SetMode(gin.ReleaseMode)
	}

	r := gin.New()


	r.Static("/assets", gopath()+"/src/github.com/dropthebit/assets")

	//MainPage Serve
	r.GET("/", func(context *gin.Context) {

	})

	//api
	v1 := r.Group("/v1")
	{
		v1.GET("aa", func(context *gin.Context) {

		})
	}
	err := r.Run()
	return err
}

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
		// get information
		v1.GET("info", func(context *gin.Context) {

		})

		// get crawling state for dashboard
		v1.GET("state", func(context *gin.Context) {

		})

		// block
		block := v1.Group("block")
		{
			block.GET("/types", func(context *gin.Context) {

			})
		}

		// block
		bp := v1.Group("blueprint")
		{
			bp.GET("/:id", func(context *gin.Context) {

			})
			bp.POST("/:id", func(context *gin.Context) {

			})
			bp.PUT("/:id", func(context *gin.Context) {

			})
			bp.DELETE("/:id", func(context *gin.Context) {

			})
		}
	}
	err := r.Run()
	return err
}

package main

import (
  "github.com/labstack/echo/v4"
  "github.com/labstack/echo/v4/middleware"
  "html/template"
  "io"
  "rentcar/klass"
  "github.com/gorilla/sessions"
  "github.com/labstack/echo-contrib/session"
)

type TemplateRenderer struct {
	templates *template.Template
}

// Render renders a template document
func (t *TemplateRenderer) Render(w io.Writer, name string, data interface{}, c echo.Context) error {

	// Add global methods if data is a map
	if viewContext, isMap := data.(map[string]interface{}); isMap {
		viewContext["reverse"] = c.Echo().Reverse
	}

	return t.templates.ExecuteTemplate(w, name, data)
}




func main() {
  e := echo.New()
  e.Use(session.Middleware(sessions.NewCookieStore([]byte("rahasia"))))
  //e.Use(middleware.Logger())
  //e.Use(middleware.Recover())
   
  e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
    AllowOrigins: []string{"http://192.168.1.64:8082","http://localhost:8084", "http://suryasuburrentcar.com"},
    AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
    AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
  }))
  
  e.Static("/", "assets")
  
  renderer := &TemplateRenderer{
    templates: template.Must(template.ParseGlob("html/*.html")),
  }
  e.Renderer = renderer
  
  e.GET("/", klass.Indexawal)
  e.POST("kirim", klass.Kirim)
  e.POST("coba", klass.Coba)
  e.GET("data-order", klass.DataOrder)
  e.GET("get-pdf", klass.Pdf)
  e.POST("userlogin", klass.Userlogin)
  
  e.GET("admin", klass.Indexawal)
  e.GET("order", klass.IndexAdmin)
  e.GET("gooutya", klass.LogOut)
  
  e.Logger.Fatal(e.Start(":"+klass.PORT))
} 

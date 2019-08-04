package main

import (
	"net/http"	
	"github.com/labstack/echo"
	"html/template"
    "io"
    "rentcar/klass"
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

func indexawal(c echo.Context) error {
    return c.Render(http.StatusOK, "index.html", map[string]interface{}{})
}

func main() {
  e := echo.New()
  e.Static("/", "assets")
  
  renderer := &TemplateRenderer{
    templates: template.Must(template.ParseGlob("html/*.html")),
  }
  e.Renderer = renderer
  e.GET("/", indexawal)  
  e.Logger.Fatal(e.Start(":"+klass.PORT))
} 

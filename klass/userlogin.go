package klass

import (
  "net/http"
  "github.com/labstack/echo/v4"
  _ "github.com/go-sql-driver/mysql"
  "github.com/gorilla/sessions"
  "github.com/labstack/echo-contrib/session"
)

func Userlogin(c echo.Context) error {
  msg := &Message{Msg:"Username / Password error", Status:false}
  
  db := connect()
  defer db.Close()
  
  rows, _ := db.Query("select id from tb_user where username = ? and passwd = ?", c.FormValue("username"), c.FormValue("passwd"))
  defer rows.Close()
  
  for rows.Next() {
    msg.Status = true
    msg.Msg = ""
    
    id := -1
    rows.Scan(&id)
    sess, _ := session.Get("session", c)
    sess.Options = &sessions.Options{
      Path:     "/",
      MaxAge:   86400 * 7,
      HttpOnly: true,
    }
    sess.Values["id"] = id
    sess.Save(c.Request(), c.Response())
  }
  
  return c.JSON(http.StatusOK, msg)
}

func Indexawal(c echo.Context) error {
    return c.Render(http.StatusOK, "index.html", map[string]interface{}{})
}

func IndexAdmin(c echo.Context) error {
  sess, _ := session.Get("session", c)
  if sess.Values["id"] == -1 {
    return c.Redirect(http.StatusSeeOther, "admin")
  }
  return Indexawal(c)
}

func LogOut(c echo.Context) error {
  sess, _ := session.Get("session", c)
  sess.Values["id"] = -1
  sess.Save(c.Request(), c.Response())
  return Indexawal(c)
}

func UpdatePassword(c echo.Context) error {
  sess, _ := session.Get("session", c)
  if sess.Values["id"] == -1 {
    return c.JSON(http.StatusOK, nil)
  }
  
  db := connect()
  defer db.Close()
  
  db.Exec("update tb_user set passwd = ? where id = ?", c.FormValue("passwd"), c.FormValue("id"))
  msg := &Message{Msg:"", Status:true}
  return c.JSON(http.StatusOK, msg)
}

func AddUser(c echo.Context) error {
  sess, _ := session.Get("session", c)
  if sess.Values["id"] == -1 {
    return c.JSON(http.StatusOK, nil)
  }
  
  db := connect()
  defer db.Close()
  
  db.Exec("insert into tb_user (username, passwd, role) values (?,?,'Admin')", c.FormValue("username"), c.FormValue("passwd"))
  msg := &Message{Msg:"", Status:true}
  return c.JSON(http.StatusOK, msg)
}

func DeleteAnUser(c echo.Context) error {
  sess, _ := session.Get("session", c)
  if sess.Values["id"] == -1 {
    return c.JSON(http.StatusOK, nil)
  }
  
  db := connect()
  defer db.Close()
  
  db.Exec("delete from tb_user where id = ?", c.FormValue("id"))
  msg := &Message{Msg:"", Status:true}
  return c.JSON(http.StatusOK, msg)
}

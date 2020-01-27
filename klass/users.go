package klass

import (
  "net/http"
  "github.com/labstack/echo/v4"
  _ "github.com/go-sql-driver/mysql"
  "github.com/labstack/echo-contrib/session"
)

type Usernya struct {
  Id  int `json:"id"`
  Username  string `json:"username"`
  Passwd  string `json:"passwd"`
  IsUpdated  bool `json:"isupdated"`
}

func DataUsers(c echo.Context) error {
  sess, _ := session.Get("session", c)
  if sess.Values["id"] == -1 {
    return c.JSON(http.StatusOK, nil)
  }  
  
  db := connect()
  defer db.Close()
  
  rows, _ := db.Query("select id, username, passwd from tb_user order by username")
  defer rows.Close()
  var result []Usernya
  
  for rows.Next() {
    var each = Usernya{}
    rows.Scan(&each.Id, &each.Username, &each.Passwd)
    each.IsUpdated = false
    result = append(result, each)
  }
  
  return c.JSON(http.StatusOK, result)
}

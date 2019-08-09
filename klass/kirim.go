package klass

import (
  "net/http"
  "github.com/labstack/echo/v4"
  _ "github.com/go-sql-driver/mysql"
)

type Message struct {
  Msg  string `json:"msg"`
  Status  bool `json:"status"`
}

func Kirim(c echo.Context) error {
  msg := &Message{Msg:"", Status:true}
  
  db := connect()
  defer db.Close()
  
  db.Exec("insert into ordernya (nama, email, hp, tanggal_pickup, tujuan, drop_off, merk_mobil, tanggal_pickup_show, pesan) values (?,?,?,?,?,?,?,?,?)", c.FormValue("nama"), c.FormValue("email"), c.FormValue("hp"), c.FormValue("tanggal_pickup"), c.FormValue("tujuan"), c.FormValue("dropoff"), c.FormValue("merkmobil"), c.FormValue("tanggal_pickup_show"), c.FormValue("pesan"))
  return c.JSON(http.StatusOK, msg)
}

func Coba(c echo.Context) error {
  msg := &Message{Msg:"aaaaa", Status:true}
  return c.JSON(http.StatusOK, msg)
}

package klass

import (
  "net/http"
  "github.com/labstack/echo/v4"
  _ "github.com/go-sql-driver/mysql"
  "time"
  "github.com/jung-kurt/gofpdf"
  "math/rand"
  "github.com/labstack/echo-contrib/session"
)

func order(c echo.Context) error {
    return c.Render(http.StatusOK, "order.html", map[string]interface{}{})
}

type Order struct {
  Id  int `json:"id"`
  Nama  string `json:"nama"`
  Email  string `json:"email"`
  Hp  string `json:"hp"`
  TanggalPickup  time.Time `json:"tanggal_pickup"`
  Tujuan  string `json:"tujuan"`
  DropOff  string `json:"drop_off"`
  MerkMobil  string `json:"merk_mobil"`
  Pesan  string `json:"pesan"`
  TanggalPickupShow  string `json:"tanggal_pickup_show"`
}

func DataOrder(c echo.Context) error {
  sess, _ := session.Get("session", c)
  if sess.Values["id"] == -1 {
    return c.JSON(http.StatusOK, nil)
  }  
  db := connect()
  defer db.Close()
  
  rows, _ := db.Query("select id, nama, email, hp, tanggal_pickup, tujuan, drop_off, merk_mobil, tanggal_pickup_show, pesan from ordernya order by  tanggal_pickup desc")
  defer rows.Close()
  var result []Order
  
  for rows.Next() {
    var each = Order{}
    rows.Scan(&each.Id, &each.Nama, &each.Email, &each.Hp, &each.TanggalPickup, &each.Tujuan, &each.DropOff, &each.MerkMobil, &each.TanggalPickupShow, &each.Pesan)
    result = append(result, each)
  }
  
  return c.JSON(http.StatusOK, result)
}

func Pdf(c echo.Context) error {
  db := connect()
  defer db.Close()
  
  rows, _ := db.Query("select id, nama, email, hp, tanggal_pickup, tujuan, drop_off, merk_mobil, tanggal_pickup_show, pesan from ordernya where id = ?", c.QueryParam("id"))
  defer rows.Close()
  
  namafile := randomFileName("order", "pdf")
  
  
  pdf := gofpdf.NewCustom(&gofpdf.InitType{
      UnitStr:    "in",
      Size:       gofpdf.SizeType{Wd: 3, Ht: 5},
  })
  pdf.SetFont("Times", "", 10)
  
  pdf.AddPage() // Default size established in NewCustom()

  
  for rows.Next() {
    var each = Order{}
    rows.Scan(&each.Id, &each.Nama, &each.Email, &each.Hp, &each.TanggalPickup, &each.Tujuan, &each.DropOff, &each.MerkMobil, &each.TanggalPickupShow, &each.Pesan)
    pdf.WriteAligned(0, 0, each.TanggalPickupShow, "L")
    pdf.Ln(0.2)
    pdf.WriteAligned(0, 0, "Nama  : " + each.Nama, "L")
    pdf.Ln(0.2)
    pdf.WriteAligned(0, 0, "Email : " + each.Email, "L")
    pdf.Ln(0.2)
    pdf.WriteAligned(0, 0, "HP : " + each.Hp, "L")
    pdf.Ln(0.2)
    pdf.WriteAligned(0, 0, "Tujuan : " + each.Tujuan, "L")
    pdf.Ln(0.2)
    pdf.WriteAligned(0, 0, "Drop Off : " + each.DropOff, "L")
    pdf.Ln(0.2)
    pdf.WriteAligned(0, 0, "Merk mobil : " + each.MerkMobil, "L")
    pdf.Ln(0.2)
    pdf.WriteAligned(0, 0, "Pesan : " + each.Pesan, "L")
  }
  
  pdf.OutputFileAndClose("assets/pdf/"+namafile)
  //err := pdf.OutputFileAndClose("assets/pdf/hello.pdf")
  //fmt.Println(err);
  return c.File("assets/pdf/"+namafile)
}

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
var seededRand *rand.Rand = rand.New(rand.NewSource(time.Now().UnixNano()))

func stringWithCharset(length int, charset string) string {
  b := make([]byte, length)
  for i := range b {
    b[i] = charset[seededRand.Intn(len(charset))]
  }
  return string(b)
}

func randomFileName(namafile string, extension string) string {
  dt := time.Now()
  return namafile+dt.String()+stringWithCharset(5,  charset)+"."+extension
}

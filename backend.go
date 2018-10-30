package main

import (
	"log"
	"net/http"
	"fmt"
)

var (
    port = "9303"
)

func main() {
	indexServer := http.FileServer(http.Dir("frontend/build/"))
	http.Handle("/", indexServer)
	http.HandleFunc("/submit", submitHandler)
	log.Println("Listening on", ":"+port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}


func mainHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func submitHandler(w http.ResponseWriter, r *http.Request)  {
	if r.Body == nil {
		http.Error(w, "Please send a request body", 400)
	}

	fmt.Println(r.Body)
}
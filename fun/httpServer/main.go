package main
import	("os"
"fmt"
	"log")

func main(){
	file,err := os.Open("messages.txt")
	if err != nil{
		log.Fatal(err)
	}
	storeMe := ""
	for{
		buffer := make([]byte,8)
		count,err := file.Read(buffer)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(count)
		fmt.Println(storeMe)
		for it:=0;it<len(buffer);it++{
			fmt.Println(buffer[:it])
			// if buffer[it] == '\'{
			// 	fmt.Println(storeMe)
			// 	storeMe=""
			// 	it++;
			// }
		}
	}
		
}


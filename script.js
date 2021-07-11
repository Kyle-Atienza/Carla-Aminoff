var services = document.querySelector(".services")
var service_items = document.querySelector(".services>.container>.items").children
var service_name = document.querySelector(".services>.container>.title>h2")
console.log(service_name)

function service_title(){
    services.addEventListener("mouseout", function(){
        service_name.innerHTML = "WHAT I DO"
    })
    for (let i = 0; i < service_items.length; i++) {
        service_items[i].addEventListener("mouseover", function(){
            
            var service_item = service_items[i].dataset.name
            switch (service_item){
                case 'weddings':
                    service_name.innerHTML = "Weddings"
                    break;
                case 'portraits':
                    service_name.innerHTML = "Portraits"
                    break;
                case 'nature':
                    service_name.innerHTML = "Nature"
                    break;
                case 'food':
                    service_name.innerHTML = "Food"
                    break;
            }
        })
        
    }
}

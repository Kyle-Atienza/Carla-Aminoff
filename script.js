

function service_title(){

    var services = document.querySelector(".services")
    var service_items = document.querySelector(".services>.container>.items").children
    var service_name = document.querySelector(".services>.container>.title>h2")

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

function change_gallery(category){

    var gallery_group = document.querySelector("#works>main>.container>.gallery").children
    var gallery_tab = document.querySelector("#works>main>.container>.categories").children
    
    for (let i = 0; i < gallery_group.length; i++) {
        gallery_group[i].classList.remove("active")
        if (gallery_group[i].classList.contains(category)) {
            gallery_group[i].classList.add("active")
        } 
    }

    for (let i = 0; i < gallery_tab.length; i++) {
        gallery_tab[i].classList.remove("active")
        if (gallery_tab[i].classList.contains(category)) {
            gallery_tab[i].classList.add("active")
        }
        
    }
    

}


// book details, including name, total count, author, and description
let books = [
    {
        name: "Kimia Dasar",
        author: "Airlangga",
        totalCount: 12,
        desc: "Buku SMK kimia dasar kelas X",
        picture: "https://ebook.erlanggaonline.co.id/cover/C0055400100.png",
    },
    {
        name: "Kimia Anorganik",
        author: "Airlangga",
        totalCount: 8,
        desc: "Buku SMK Anorganik dasar kelas XI",
        picture: "https://imgv2-2-f.scribdassets.com/img/document/521268101/original/1e032605cb/1688793797?v=1",
    },
    {
        name: "Kimia Organik",
        author: "Airlangga",
        totalCount: 17,
        desc: "Buku SMK kimia Orgnaik kelas XI",
        picture: "https://s3.bukalapak.com/img/81809467003/s-463-463/data.jpeg.webp",
    },
    {
        name: "Kimia Fisika",
        author: "Airlangga",
        totalCount: 12,
        desc: "Buku SMK kimia Fisika kelas XII",
        picture: "https://deepublishstore.com/wp-content/uploads/2018/03/kimia-fisika-Convert-depan1-1200x1557.jpg",
    },
    {
        name: "Kimia Terapan",
        author: "Airlangga",
        totalCount: 12,
        desc: "Buku SMK kimia Terapan kelas X",
        picture: "https://cdn.annibuku.com/uploads/cover/20140916135816_tn.jpg",
    },
    {
        name: "Oprasi Teknik Kimia",
        author: "Airlangga",
        totalCount: 15,
        desc: "Buku SMK Oprasi Teknik Kimia kelas X",
        picture: "https://www.quantumbook.id/storage/image/product/1630374079281.jpg",
    },
    {
        name: "Vogel",
        author: "Airlangga",
        totalCount: 10,
        desc: "Kitab Dasar Kimia",
        picture: "https://s3.bukalapak.com/img/3154552765/large/IMG_20190121_121026_399_scaled.jpg",
    },
    {
        name: "Kimia Analisis",
        author: "Airlangga",
        totalCount: 18,
        desc: "Buku SMK kimia dasar kelas XII",
        picture: "https://cdn.annibuku.com/uploads/cover/20140916135815_tn.jpg",
    },
]


let booksList = getLocalStorage();

function getLocalStorage() {
    let storedData = localStorage.getItem('booksData');
    if (storedData) {
        return JSON.parse(storedData);
    } else {
        localStorage.setItem('booksData', JSON.stringify(books));
        return [];
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function showData(booksList) {
    let output = "";
  
    for (let i = 0; i < booksList.length; i++) {
      output += `
              <tr>
                  <td>    
                      <img class="bookImg" src="${booksList[i].picture}" alt="Album Image">
                  </td>
                  <td>    
                      ${booksList[i].name}
                  </td>
                  <td>    
                      ${booksList[i].author}
                  </td>
                  <td>    
                      ${booksList[i].totalCount}
                  </td>
                  <td>    
                      ${booksList[i].desc}
                  </td>
                  <td>
                      <button onclick="editBookList(${i})">Edit</button>
                  </td>
                  <td>
                      <button onclick="deleteBookList(${i})">Delete</button>
                  </td>
              </tr>
          `;
    }
  
    document.getElementById("tableBuku").innerHTML = output;
  }

showData(booksList)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function deleteBookList(index) {
    booksList.splice(index, 1);
    localStorage.setItem('booksData', JSON.stringify(booksList));
    showData(booksList);
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function editBookList(index) {
    let editedRow = ""
    for(i = 0 ; i < booksList.length ; i++){
        if(i === index){
           editedRow +=`
        <tr>
            <td>
                <input type="text" id="editPicture" value="${booksList[index].picture}" />
            </td>
            <td>
                <input type="text" id="editName" value="${booksList[index].name}" />
            </td>
            <td>
                <input type="text" id="editAuthor" value="${booksList[index].author}" />
            </td>
            <td>
                <input type="number" id="editTotalCount" value="${booksList[index].totalCount}" />
            </td>
            <td>
                <input type="text" id="editDesc" value="${booksList[index].desc}" />
            </td>
            <td>
                <button onclick="saveBooklist(${index})">Save</button>
            </td>
            <td>
                <button onclick="showData(booksList)">Cancel</button>
            </td>
        </tr>
    `;
        } else {
          editedRow +=  `
              <tr>
                  <td>    
                      <img class="bookImg" src="${booksList[i].picture}" alt="Album Image">
                  </td>
                  <td>    
                      ${booksList[i].name}
                  </td>
                  <td>    
                      ${booksList[i].author}
                  </td>
                  <td>    
                      ${booksList[i].totalCount}
                  </td>
                  <td>    
                      ${booksList[i].desc}
                  </td>
                  <td>
                      <button onclick="editBookList(${i})">Edit</button>
                  </td>
                  <td>
                      <button onclick="deleteBookList(${i})">Delete</button>
                  </td>
              </tr>
          `;
          
        }
    }

    document.getElementById("tableBuku").innerHTML = editedRow;
}

function saveBooklist(index) {
    let editedPicture = document.getElementById("editPicture").value;
    let editedName = document.getElementById("editName").value;
    let editedAuthor = document.getElementById("editAuthor").value;
    let editedTotalCount = parseInt(document.getElementById("editTotalCount").value);
    let editedDesc = document.getElementById("editDesc").value;

    booksList[index].picture = editedPicture;
    booksList[index].name = editedName;
    booksList[index].author = editedAuthor;
    booksList[index].totalCount = editedTotalCount;
    booksList[index].desc = editedDesc;

    localStorage.setItem('booksData', JSON.stringify(booksList));
    showData(booksList);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addNewBook() {
    let newBookRow = `
        <tr>
            <td>
                <input type="text" id="addPicture" value="" />
            </td>
            <td>
                <input type="text" id="addName" value="" />
            </td>
            <td>
                <input type="text" id="addAuthor" value="" />
            </td>
            <td>
                <input type="number" id="addTotalCount" value="" />
            </td>
            <td>
                <input type="text" id="addDesc" value="" />
            </td>
            <td>
                <button onclick="saveNewBook()">Save</button>
            </td>
            <td>
                <button onclick="showData(booksList)">Cancel</button>
            </td>
        </tr>
    `;
    document.getElementById("tableBuku").innerHTML = newBookRow;
}

function saveNewBook() {
    let addedPicture = document.getElementById("addPicture").value;
    let addedName = document.getElementById("addName").value;
    let addedAuthor = document.getElementById("addAuthor").value;
    let addedTotalCount = parseInt(document.getElementById("addTotalCount").value);
    let addedDesc = document.getElementById("addDesc").value;

    let newBook = {
        picture: addedPicture,
        name: addedName,
        author: addedAuthor,
        totalCount: addedTotalCount,
        desc: addedDesc
    };

    booksList.push(newBook);
    localStorage.setItem('booksData', JSON.stringify(booksList)); // Simpan buku baru ke penyimpanan lokal
    showData(booksList);
}

//////////////////////////////////////////////////////////////////////////////////

function clearAllData() {
    localStorage.removeItem('booksData');
    booksList = [];
    showData(booksList);
    
}

function refreshData(){
    booksList = getLocalStorage();
    showData(booksList);
}



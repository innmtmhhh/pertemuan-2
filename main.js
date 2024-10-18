let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `bg-white p-4 rounded-lg shadow-md flex items-center justify-between mt-2`;
   task.innerHTML = `
         <p class="text-gray-800">${title}</p>
         <div class="flex space-x-2">
            <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                   class="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-400 cursor-pointer">
            <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                   class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-400 cursor-pointer">
         </div>
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}

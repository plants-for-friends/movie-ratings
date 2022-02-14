<script>
    let todo = "";
</script>

<form class="my-6">
    <div class="flex flex-col text-sm mb-2">
        <label class=" font-bold mb-2 text-gray-800" for="todo">Todo</label>
        <input type="text" name="todo" placeholder="Things you should do" class="appearance-none shadow-sm border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"/>
    </div>
    <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue600 text-white py-2 px-4">Submit</button>
</form>
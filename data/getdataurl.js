  <script>
  async function file_get_contents(uri, callback) {
    let res = await fetch(uri),
        ret = await res.text(); 
    return callback ? callback(ret) : ret; // a Promise() actually.
}

file_get_contents("https://api.webgold.ir/data/?u=instinfofast&i=2400322364771558", console.log);
</script>

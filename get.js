  // Fungsi untuk mendapatkan nilai dari URL query parameters
  function getQueryParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    var value = decodeURIComponent(results[2].replace(/\+/g, ' '));
    // Mengabaikan parameter m=1
    if (name === 'm' && value === '1') return null;
    return value;
  }

  // Mendapatkan nilai judul dan URL dari URL query parameters
  var encodedJudul = getQueryParameter('judul');
  var judul = atob(encodedJudul);
  // Base64 decode judul

  var encodedFoto = getQueryParameter('foto');
  var foto = encodedFoto ? atob(encodedFoto) : null;
  // Base64 decode foto jika ada

  var urlContainer = document.getElementById('container');

  var div = document.createElement('div');
  div.className = 'wc-bxdw-wrap shadow-sm mt-2';

  var judulContainer = document.getElementById('judulContainer');
  var judulElement = document.createElement('h2');
  judulElement.textContent = judul;
  judulContainer.appendChild(judulElement);

  if (foto) {
    var fotoElement = document.createElement('img');
    fotoElement.src = foto;
    judulContainer.appendChild(fotoElement);
  }

  urlContainer.appendChild(div);

  // Mendapatkan query parameter "subs" dan melakukan encoding
  var subsParamIndex = 1;
  var encodedSubsParam = getQueryParameter('subs' + subsParamIndex);

  var subsButtons = [];

  while (encodedSubsParam) {
    var subsParam = atob(encodedSubsParam); // Base64 decode URL

    var subsButton = document.createElement('button');
    subsButton.className = 'wc-stu-btn yt text-blue';
    subsButton.textContent = 'Subscribe';
    subsButton.setAttribute('data-link', subsParam);

    subsButtons.push(subsButton);
    div.appendChild(subsButton);

    subsParamIndex++;
    encodedSubsParam = getQueryParameter('subs' + subsParamIndex);
  }

  // Mendapatkan query parameter "ig" dan melakukan encoding
  var igParamIndex = 1;
  var encodedIgParam = getQueryParameter('ig' + igParamIndex);

  while (encodedIgParam) {
    var igParam = atob(encodedIgParam); // Base64 decode URL

    var igButton = document.createElement('button');
    igButton.className = 'wc-stu-btn ig';
    igButton.textContent = 'Follow Instagram';
    igButton.setAttribute('data-link', igParam);
    igButton.disabled = true;
    div.appendChild(igButton);

    igParamIndex++;
    encodedIgParam = getQueryParameter('ig' + igParamIndex);
  }

// Mendapatkan query parameter "like" dan melakukan encoding

  var likeParamIndex = 1;

  var encodedlikeParam = getQueryParameter('like' + likeParamIndex);

  while (encodedlikeParam) {

    var likeParam = atob(encodedlikeParam); // Base64 decode URL

    var likeButton = document.createElement('button');

    likeButton.className = 'wc-stu-btn like';

    likeButton.textContent = 'Like Video';

    likeButton.setAttribute('data-link', likeParam);

    likeButton.disabled = true;

    div.appendChild(likeButton);

    likeParamIndex++;

    encodedlikeParam = getQueryParameter('like' + likeParamIndex);

  }

  
  
  // Mendapatkan query parameter "fb" dan melakukan encoding
  var fbParamIndex = 1;
  var encodedFbParam = getQueryParameter('fb' + fbParamIndex);

  while (encodedFbParam) {
    var fbParam = atob(encodedFbParam); // Base64 decode URL

    var fbButton = document.createElement('button');
    fbButton.className = 'wc-stu-btn fb';
    fbButton.textContent = 'Ikuti Facebook';
    fbButton.setAttribute('data-link', fbParam);
    fbButton.disabled = true;
    div.appendChild(fbButton);

    fbParamIndex++;
    encodedFbParam = getQueryParameter('fb' + fbParamIndex);
  }
  
  
  // Mendapatkan query parameter "fb" dan melakukan encoding

  var tkParamIndex = 1;
  var encodedtkParam = getQueryParameter('tiktok' + tkParamIndex);
  while (encodedtkParam) {
    var tkParam = atob(encodedtkParam); // Base64 decode URL
    var tkButton = document.createElement('button');
    tkButton.className = 'wc-stu-btn tk';
    tkButton.textContent = 'Ikuti Tiktok';
    tkButton.setAttribute('data-link', tkParam);
    tkButton.disabled = true;
    div.appendChild(tkButton);
    tkParamIndex++;
    encodedtkParam = getQueryParameter('tiktok' + tkParamIndex);
  }

  
  // Mendapatkan query parameter "lonceng" dan melakukan encoding

  var lonParamIndex = 1;
  var encodedlonParam = getQueryParameter('lon' + lonParamIndex);
  while (encodedlonParam) {
    var lonParam = atob(encodedlonParam); // Base64 decode URL
    var lonButton = document.createElement('button');
    lonButton.className = 'wc-stu-btn lon';
    lonButton.textContent = 'Subscribe And Bell';
    lonButton.setAttribute('data-link', lonParam);
    lonButton.disabled = true;
    div.appendChild(lonButton);
    lonParamIndex++;
    encodedlonParam = getQueryParameter('lon' + lonParamIndex);

  }  
  
  // Mendapatkan query parameter "dwn" dan melakukan encoding
  var dwnParamIndex = 1;
  var encodedDwnParam = getQueryParameter('dwn' + dwnParamIndex);

  while (encodedDwnParam) {
    var dwnParam = atob(encodedDwnParam); // Base64 decode URL

    var dwnButton = document.createElement('button');
    dwnButton.className = 'wc-stu-btn lock';
    dwnButton.textContent = 'Download';
    dwnButton.setAttribute('data-link', dwnParam);
    dwnButton.disabled = true;
    div.appendChild(dwnButton);

    dwnParamIndex++;
    encodedDwnParam = getQueryParameter('dwn' + dwnParamIndex);
  }
  


  // Mengaktifkan tombol "subs" pertama jika ada, dan menonaktifkan tombol-tombol "subs" lainnya
  if (subsButtons.length > 0) {
    subsButtons[0].disabled = false;
    for (var i = 1; i < subsButtons.length; i++) {
      subsButtons[i].disabled = true;
    }
  } else {
    // Mengaktifkan tombol lain jika tidak ada tombol "subs"
    var igButtons = div.getElementsByClassName('wc-stu-btn ig');
    var fbButtons = div.getElementsByClassName('wc-stu-btn fb');
    var dwnButtons = div.getElementsByClassName('wc-stu-btn lock');
    var likeButtons = div.getElementsByClassName('wc-stu-btn like');
    var lonButtons = div.getElementsByClassName('wc-stu-btn lon');
    var tkButtons = div.getElementsByClassName('wc-stu-btn tk');
    if (igButtons.length > 0) {
      igButtons[0].disabled = false;
    } else if (fbButtons.length > 0) {
      fbButtons[0].disabled = false;
    }else if (tkButtons.length > 0) {
      tkButtons[0].disabled = false;
    }else if (likeButtons.length > 0) {
      likeButtons[0].disabled = false;
    }else if (lonButtons.length > 0) {
      lonButtons[0].disabled = false;
    } else if (dwnButtons.length > 0) {
      dwnButtons[0].disabled = false;
    }
  }

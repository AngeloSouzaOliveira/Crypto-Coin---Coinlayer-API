fetch('http://api.coinlayer.com/list?access_key=5cc59252a140defb290d5aafe0963a5f', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
    .then((response) => {
        if (!response.ok) throw new Error('Ocorreu um erro ao executar a resquisição, status ' + response.status);
        return response.json();

    })
    .then((obj) => {
        item = obj.crypto;


        var template = '';

        for (key in item) {
            var element = item[key]


            template += `
            
            <div class="col-md-4">
                <div class="my-3 p-3 bg_primary_light drop_shadow_card rounded">
                    <div class="d-flex text-muted pt-3">
                        <img src="${element.icon_url}" class="bd-placeholder-img flex-shrink-0 me-2  rounded " width="72" height="72" />
                        <div class="pb-3 mb-0 small lh-sm  w-100 pl-3">
                            <div class="d-flex justify-content-between border-bottom mb-2">
                                <strong class="text-primary text-name">${element.name}</strong>
                            </div>
                            <span class="text_sencudary_light">Símbolo:</span> <span class=" text-gray"><strong>${element.symbol}</strong></span>
                            <br>
                            <span class="btnTo" data-bs-toggle="tooltip" data-bs-placement="top" title="Quantidade máxima de moedas que será emitida">?</span class="mt-2"><span><span class="text_sencudary_light">Max Supply:</span> <span class="text-gray"><strong> ${element.max_supply}</strong></span></span>
                        </div>

                    </div>
                </div>
            </div>
            
            
            `

        }

        document.querySelector('#main').innerHTML = template;

    }).catch((error) => {
        console.error(error.message);
    });
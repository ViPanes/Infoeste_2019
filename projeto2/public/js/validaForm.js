function validar() {
    let codigo = $('#codigo').val();
    let nome = $('#nome').val();
    let curso = $('#cursos').val();

    if(codigo == '' || codigo <= 0)
    {
        $('#codigo').addClass('erro');
        return;
    }

    $('#codigo').removeClass('erro');   

    if(nome == '' || nome.length > 20)
    {
        $('#nome').addClass('erro');
        return;
    }
    
    $('#nome').removeClass('erro');
    

    if(curso == '')
    {
        $('#cursos').addClass('erro');
        return;
    }

    $('#cursos').removeClass('erro');
    
    addTable(codigo, nome, curso);
    limparCampos ();
}

function limparCampos (){
    $('#codigo').val('');
    $('#nome').val('');
    $('#cursos').val('');
    $('#email').val('');
    $('#mensagem').val('');
}

function addTable (c, n, cu)
{
    $('tbody').append(
        `<tr id='${c}#${n}#${cu}'>
            <td>${c}</td>
            <td>${n}</td>
            <td onclick="removeTabela(this)">X</td>
            <td onclick="alt(this)">${cu}</td>
        </tr>`
    );
}

function removeTabela(td) {
    $(td.closest('tr')).remove();
}

function alt(td) {
    let data = td.closest('tr').id.split('#');

    $('#codigo').val(data[0]);
    $('#nome').val(data[1]);
    $('#cursos').val(data[2]);
}

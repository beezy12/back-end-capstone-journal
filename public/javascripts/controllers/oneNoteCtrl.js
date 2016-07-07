'use strict'

app.controller('oneNoteCtrl', ['$http', '$state', '$stateParams', function($http, $state, $stateParams) {

    const self = this

    let journal = $stateParams;
    console.log('this is the selected journal', journal)

    self.title = ''
    self.entry = ''


    $http.get(`/api/userdata/getNote/${journal.id}`)
    .then((foundNote) => {
        self.noteInfo = foundNote
        console.log('foundnote', foundNote)
    })


    self.deleteEntry = function(thisEntry) {
        $http.delete(`/api/userdata/deleteEntry/${journal.id}`)
        .then(() => {
            $state.go('main')
        })
        .catch((res) => {
            console.log(res.status)
        })
    }

    // let saved = false
    self.updateEntry = function() {

        let journalInfo = {title: self.noteInfo.data.title, entry: self.noteInfo.data.entry}
        console.log('heres what youre trying to update', journalInfo)
        console.log('journal id?', journal.id)

        $http.put(`/api/userdata/${journal.id}`, journalInfo)
        .then((data) => {
            self.status = data.data.status
            // saved = true
        })
    }









    // get ids for buttons
    // onclick have a function run that gets the selected text
    // attach the proper modification





    // function bolden() {
    //     var field = document.getElementById('journalBox').toString()
    //     var whatIsIt = typeof(field)
    //     console.log(whatIsIt)

    //     var startPos = field.selectionStart
    //     var andThis = typeof(startPos)
    //     console.log('andThis', andThis)

    //     var endPos = field.selectionEnd
    //     var fieldValue = field.value
    //     console.log(startPos)
    //     var selectedText = fieldValue.substring(startPos, endPos)
    //     console.log('selectedText heeeere', selectedText)

    //     var words = document.getElementById('journalBox')
    //     // var range = words.
    // }



    // document.getElementById('editor').addEventListener('click', ShowSelectionInsideTextarea);

    //         function ShowSelectionInsideTextarea() {
    //              var textComponent = document.getElementById('journalBox');

    //               var selectedText;
    //               // IE version
    //               if (document.selection != undefined)
    //               {
    //                 textComponent.focus();
    //                 var sel = document.selection.createRange();
    //                 selectedText = sel.text;
    //               }
    //               // Mozilla version
    //               else if (textComponent.selectionStart != undefined)
    //               {
    //                 var startPos = textComponent.selectionStart;
    //                 var endPos = textComponent.selectionEnd;
    //                 selectedText = textComponent.value.substring(startPos, endPos)
    //               }
    //                 alert("You selected: " + selectedText);

    //         }




     // Select some text below and then click the button:<br/>
    // <textarea id="myTextarea" rows="5" cols="30">
    //     Lorem ipsum dolor sit amet,
    //     consectetur adipiscing elit.
    //     </textarea>
    //     <button onclick="alert(getTextSelection())">alert text selection</button>

    //     <script type="text/javascript">
    //         function getTextSelection(){
    //             var field = document.getElementById("myTextarea");
    //             var startPos = field.selectionStart;
    //             var endPos = field.selectionEnd;
    //             var field_value = field.value;
    //             var selectedText = field_value.substring(startPos,endPos);
    //             return selectedText;
    //         }
    //     </script>




            // function myFunction(obj) {
            //     var selectedText = obj.value.slice(obj.selectionStart, obj.selectionEnd);
            //     alert(selectedText);
        //}





}])

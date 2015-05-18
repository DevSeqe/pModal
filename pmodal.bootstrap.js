(function ($) {
    $.fn.pModal = function (opts)
    {
        var defaultOptions = {
            title: 'Attention!',
            content: 'Are you sure?',
            confirm: 'Yes',
            decline: 'No',
            confirmType: 'success',
            declineType: 'danger',
            confirmCallback: defaultCallback,
            showOnStartup: false,
            killOnClose: false,
            appendTo: 'body',
            customClass: '',
            width: false
        };

        var options = $.extend(defaultOptions, opts);

        var hasModal = $(this).data('pmodal');

        var triggerElement = $(this);

        if (hasModal) {
        }
        else {
            var time = Date.now();
            var modalId = "p-modal-" + parseInt(time);

            $(this).data('pmodal', modalId);

            $(this).on('click', function (event) {
                event.preventDefault();
                $('#' + $(this).data('pmodal')).modal('show');
            });

            var modal = generateModal();

            modal.appendTo(options.appendTo);

            if (options.showOnStartup) {
                $('#' + modalId).modal('show');
            }
        }



        function generateModal() {
            var width = '';
            if(options.width){
                width = 'style="width: '+options.width+';"';
            }
            var dialog = $('<div class="modal-dialog ' + options.customClass + '" '+width+'></div>');
            var dialogContent = $('<div class="modal-content"></div>');
            dialogContent.append(generateHeader())
                    .append(generateContent())
                    .append(generateFooter());
            dialog.append(dialogContent);
            var modal = $('<div class="modal fade" id="' + modalId + '"></div>');
            modal.append(dialog);
            return modal;
        }

        function generateHeader() {
            var header = $('<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title">' + options.title + '</h4>' +
                    '</div>');
            return header;
        }

        function generateContent() {
            var content = $('<div class="modal-body">' +
                    options.content +
                    '</div>');
            return content;
        }

        function generateFooter() {
            var footer = $('<div class="modal-footer"></div>');

            if (options.confirm) {
                var confirm = $('<button type="button" class="btn btn-' + options.confirmType + '">' + options.confirm + '</button>');
                confirm.on('click', options.confirmCallback);
                footer.append(confirm);
            }
            if (options.decline) {
                var decline = $('<button type="button" class="btn btn-' + options.declineType + '" data-dismiss="modal">' + options.decline + '</button>');
                if (options.killOnClose) {
                    decline.on('click', killModal);
                }
                footer.append(decline);
            }
            return footer;
        }

        function defaultCallback(target) {
            window.location = $(triggerElement).attr('href');
        }

        function killModal() {
            $('*[data-pmodal='+modalId+']').removeAttr('data-pmodal');
            $('#' + modalId).remove();
        }
    };
})(jQuery);
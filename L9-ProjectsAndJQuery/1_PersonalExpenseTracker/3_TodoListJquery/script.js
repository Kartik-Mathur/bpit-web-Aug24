$('body')
    .append(
        $('<input>')
            .attr('placeholder', 'Add new task')
            .addClass('input')
    )
    .append(
        $('<button>')
            .text('Add Task')
            .addClass('btn')
            .click(() => {
                $('.tasklist')
                    .append(
                        $('<li>')
                            .append(
                                $('<span>')
                                    .text($('input').val())
                            )
                            .append(
                                $('<button>')
                                    .text('↑')
                                    .addClass('up')
                                    .click(ev => {
                                        $(ev.target).parent().prev().before($(ev.target).parent())
                                    })
                            )
                            .append(
                                $('<button>')
                                    .text('↓')
                                    .addClass('down')
                                    .click(ev => {
                                        $(ev.target).parent().before($(ev.target).parent().next())
                                    })
                            )
                            .append(
                                $('<button>')
                                    .text('❌')
                                    .click(ev => {
                                        $(ev.target).parent().remove()
                                    })
                            )
                    )
                $('input').val('');
            })
    )
    .append(
        $('<ul>')
            .addClass('tasklist')
    )

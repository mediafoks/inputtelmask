// InputMask
var inputsTel = document.querySelectorAll('input[type="tel"]')
inputsTel.forEach(
    (input) =>
        new InputTelMask({
            selector: input,
            layout: input.dataset.mask,
        })
)

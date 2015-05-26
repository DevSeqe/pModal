# pModal

jQuery extension to dynamically generate bootstrap modal.

### Usage

Just add pModal file after jQuery and bootstrap, now you can use it in your code. Basic execution is just simply select element and run pModal() method.
```js
<a href="/some/action" class="myButton">Click me!</a>
( .. )
<script type="text/javascript">
$(function(){
    $('.myButton').pModal();
});
</script>
```
Now when you click on this link, modal will appear, and if you want to proceed to it's action you need to click accept button.
  
### Other options
You can also customize modal with few parameters. For example:
```js
$('.myButton').pModal({
    title: 'My custom title!',
    content: '<strong>This can change everything!</strong>',
    confirm: 'Yay!',
    decline: 'Oh... Bollocks :c'
});
```

Other options are:
- **title** - Title of modal
- **content** - Content of modal body (HTML accepted :) )
- **confirm** - Text on confirm button (set **false** to hide)
- **decline** - Text on decline button (set **false** to hide)
- **confirmType** - Color of confirm button, it uses bootstrap classes so if you set **primary** it will create **btn-primary** color button.
- **declineType** - Same as above, just for the decline button.
- **confirmCallback** - You can customize action on confirm button click with this parameter.
- **showOnStartup** - If you set this to **true** modal will appear just after you execute **pModal()** method
- **killOnClose** - If you set it to **true** after you decline or, accept modal it's object will be removed from DOM
- **appendTo** - You can specify where modal markup should be applied, by default it's **body**
- **customClass** - Usefull when you need to add custom class for specific modal.
- **width** - When specified this value set custom width for modal. Accepts both percentage and fixed values.

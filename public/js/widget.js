(function () {

// Localize jQuery variable
    var jQuery;

    /* Load jQuery if not present */
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.7.2') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src",
            "https://code.jquery.com/jquery-3.3.1.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    scriptLoadHandler();
                }
            };
        }
        else {
            script_tag.onload = scriptLoadHandler;
        }

        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    }
    else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        main();
    }

    /* Called once jQuery has loaded */
    function scriptLoadHandler() {
        jQuery = window.jQuery.noConflict(true);
        main();
    }

    /* Our Start function */
    function main() {
        jQuery(document).ready(function ($) {
            /* Get 'embed' parameter from the query */
            var widget_clinic = window.widget_clinic;
            var widget_width = window.widget_width;
            var widget_height = window.widget_height;
            var widget_logo = window.widget_logo;
            var widget_doctors = window.widget_doctors;

            if (typeof widget_width == typeof undefined) {
                widget_width = "100%";
            }

            if (typeof widget_logo == typeof undefined) {
                widget_logo = "up";
            }

            if (typeof widget_width == typeof undefined) {
                widget_height = "550";
            }

            if (typeof widget_doctors == typeof undefined) {
                widget_doctors = "no";
            }

            /* Set 'height' and 'width' according to the content type */
            var iframeContent = '<iframe height="' + widget_height + '" width="' + widget_width + '" frameborder="0" border="0" cellspacing="0" src="https://cl1.su/clinic/widget/' + widget_clinic + '/'+widget_logo+'/'+widget_doctors+'"></iframe>';

            $("#embed-widget-container").html(iframeContent);
        });
    }

})();

/*-------check whether the given file name is a javascript file or not----------- */
// problem-2


function isJavaScriptFile(fileExtension) {

    if (typeof fileExtension === 'string') {

        const selectFileExtension = fileExtension.toLowerCase();

        if (selectFileExtension.endsWith('.js')) {

            return 'ture';
        }

        return 'false';

    }
    else {
        return 'pls enter a string';
    }
}

// const str = isJavaScriptFile('.JS');
// console.log(str);


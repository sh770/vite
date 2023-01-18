    export function toggleDarkMode() {
        // body.stile
        document.body.style.display = "none";
        // // אם לא קיימת ערך ב-localStorage עבור "dark", מוסיפים את הערך בשם זה ב-localStorage
        // if (!localStorage.getItem('dark')) {
        //     localStorage.setItem('dark', true);
        //     console.log('dark true');
        // } else {
        //     // אחרת, קבלת את הערך מ-localStorage
        //     let isDarkMode = localStorage.getItem('dark');
        //     // אם הערך חיובי, משנת את הערך ל-false
        //     if (isDarkMode === 'true') {
        //         localStorage.setItem('dark', false);
        //         console.log('dark false');
        //     } else {
        //         // אחרת, משנת את הערך ל-true
        //         localStorage.setItem('dark', true);
        //         console.log('dark true');
        //     }
        // }
    }
    
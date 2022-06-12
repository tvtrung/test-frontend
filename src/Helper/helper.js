import React from 'react';
const renderHTML = (text) => {
    if( text !== undefined && text.indexOf('</') !== -1){
        return (
            <div dangerouslySetInnerHTML={{__html: text.replace(/(<? *script)/gi, 'illegalscript')}}></div>
        )
    }else{
        return text;
    }
}
const Helper = {
  renderHTML:renderHTML
}
export default Helper;

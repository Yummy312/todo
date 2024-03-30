import {useMemo} from "react";

export const useSearchNote=(searchQuery, notes)=>{
    return useMemo(

        () =>{
            return notes.filter(note => note.title.includes(searchQuery))
        },
        [searchQuery, notes]
    )
}
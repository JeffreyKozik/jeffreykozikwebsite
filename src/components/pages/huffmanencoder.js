import * as React from "react"
import huffman_edited from "../../images/huffman_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const HuffmanEncoderComponent = () => (
    <>
        <h1 className={pages.page_title}> Huffman Encoder and Decoder </h1>
        <h3 className={pages.page_subtitle}>
            Java program to compress file by 58%. Input file read, HashMap stores char frequencies, ArrayList encapsulates
            data which is turned into Huffman Tree, encodes the characters.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={huffman_edited} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            To expand a little bit on the subtitle of this page, the gist of what this program does is count frequencies of characters
            in a document and optimize encoding based upon that. In basic encoding, each character is represented by a fixed amount
            of 1s and 0s. However, this means that a really uncommon character like a q or a z takes up as much space as a frequently
            used character like an e or a t. So with this Huffman Encoder, encodings are changed so that es and ts are represented
            by less 1s and 0s and qs and zs are represented by more which saves overall storage.
        </p>
        <p className={pages.page_description}>
            You can browse the code at the Github repository located <a href="https://github.com/JeffreyKozik/HuffmanEncoder">here</a>.
        </p>
    </>
)

export default HuffmanEncoderComponent

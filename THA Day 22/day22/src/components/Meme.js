import { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const Meme = ({ meme, setMeme }) => {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "ShreyashSingh2",
    password: "HeS3TCTkjy6p!eH",
    boxes: [],
  });
  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}&`;
    form.boxes.map(
      (box, index) => (url += `&boxes[${index}][text]=${box.text}`)
    );
    (async () => {
      let res = await fetch(url);
      let data = await res.json();
      if (data.success) setMeme({ ...meme, url: data.data.url });
    })();
  };
  return (
    <div className="meme_page">
      <div>
        <div>
          <img className="meme_image" src={meme.url} alt="" />
        </div>
        <div className="meme_name">{meme.name}</div>
      </div>
      <div>
        <div className="caption">
          {[...Array(meme.box_count)].map((_, index) => (
            <TextField
              key={index}
              type="text"
              placeholder={`Meme Caption ${index + 1}`}
              onChange={(e) => {
                const newBoxes = form.boxes;
                newBoxes[index] = { text: e.target.value };
                setForm({ ...form, boxes: newBoxes });
              }}
            />
          ))}
        </div>
        <div className="btns">
          <Button variant="contained" color="primary" onClick={generateMeme}>
            Generate Meme
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setMeme(null);
            }}
          >
            Choose Template
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Meme;

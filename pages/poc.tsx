import {
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { ANIMATION, Animations } from "@/constants/animation";
import { FONT, Fonts } from "@/constants/font";
import { html_beautify, css_beautify } from "js-beautify";

export default function Home() {
  const [color, setColor] = useState("#ff6e5c");
  const [donatorColor, setDonatorColor] = useState("#ffffff");
  const [amountColor, setAmountColor] = useState("#ffffff");
  const [customTextColor, setCustomTextColor] = useState("#333333");
  const [messageColor, setMessageColor] = useState("#333333");
  const [customText, setCustomText] = useState("mendukung Pa Dhika sejumlah");
  const [animation, setAnimation] = useState<Animations>();
  const [font, setFont] = useState<Fonts>();

  const code = `<div class="container in">
  <p class="template">
    <span class="donatur">{donator}</span> ${customText}
    <span class="amount">{amount}</span>
  </p>
  <p class="message">{message}</p>
</div>
<style>
${(font && FONT[font]) || ""}
.container {
  position: relative;
  background-color: ${color};
  padding: 1em;
  border-radius: 0.5em;
  text-align: center;
  font-size: 2em;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  color: ${customTextColor};
}

.message {
  font-weight: bolder;
  color: ${messageColor};
}

.donatur{
  color: ${donatorColor};
}

.amount {
  color: ${amountColor};
}

.container:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  background: linear-gradient(120deg, #3c4663, ${color});
  background-size: 300% 300%;
  clip-path: polygon(
    0% 100%,
    10px 100%,
    10px 10px,
    calc(100% - 10px) 10px,
    calc(100% - 10px) calc(100% - 10px),
    10px calc(100% - 10px),
    10px 100%,
    100% 100%,
    100% 0%,
    0% 0%
  );
}

.container.in:after {
  animation: frame-enter 1s forwards ease-in-out reverse, gradient-animation 4s
      ease-in-out infinite;
}

/* motion */
@keyframes gradient-animation {
  0% {
    background-position: 15% 0%;
  }
  50% {
    background-position: 85% 100%;
  }
  100% {
    background-position: 15% 0%;
  }
}

@keyframes frame-enter {
  0% {
    clip-path: polygon(
      0% 100%,
      10px 100%,
      10px 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) calc(100% - 10px),
      10px calc(100% - 10px),
      10px 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  25% {
    clip-path: polygon(
      0% 100%,
      10px 100%,
      10px 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) calc(100% - 10px),
      calc(100% - 10px) calc(100% - 10px),
      calc(100% - 10px) 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  50% {
    clip-path: polygon(
      0% 100%,
      10px 100%,
      10px 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) 10px,
      calc(100% - 10px) 10px,
      100% 0%,
      0% 0%
    );
  }
  75% {
    -webkit-clip-path: polygon(
      0% 100%,
      10px 100%,
      10px 10px,
      10px 10px,
      10px 10px,
      10px 10px,
      10px 10px,
      10px 10px,
      10px 0%,
      0% 0%
    );
  }
  100% {
    -webkit-clip-path: polygon(
      0% 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      10px 100%,
      0% 100%
    );
  }
}
${(animation && ANIMATION[animation]) || ""}
</style>
`;
  const html = code.split("<style>")[0];
  const css = code.split("<style>")[1].split("</style>")[0];
  return (
    <Stack spacing={4}>
      <div
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      />
      <Stack direction="row" spacing={4}>
        <Stack>
          <Text fontWeight="bold">Background</Text>
          <Input
            type="color"
            onChange={(v) => setColor(v.target.value)}
            value={color}
            p={0}
            width={"100px"}
            h="full"
          />
        </Stack>
        <Stack>
          <Text fontWeight="bold">{`{donator}`}</Text>
          <Input
            type="color"
            onChange={(v) => setDonatorColor(v.target.value)}
            value={donatorColor}
            p={0}
            width={"100px"}
            h="full"
          />
        </Stack>
        <Stack>
          <Text fontWeight="bold">{`{amount}`}</Text>
          <Input
            type="color"
            onChange={(v) => setAmountColor(v.target.value)}
            value={amountColor}
            p={0}
            width={"100px"}
            h="full"
          />
        </Stack>
        <Stack>
          <Text fontWeight="bold">Custom text</Text>
          <Input
            type="color"
            onChange={(v) => setCustomTextColor(v.target.value)}
            value={customTextColor}
            p={0}
            width={"100px"}
            h="full"
          />
        </Stack>
        <Stack>
          <Text fontWeight="bold">{`{message}`}</Text>
          <Input
            type="color"
            onChange={(v) => setMessageColor(v.target.value)}
            value={messageColor}
            p={0}
            width={"100px"}
            h="full"
          />
        </Stack>
        <Stack w="full" spacing={4}>
          <Stack>
            <Text fontWeight="bold">Custom Text :</Text>
            <Input
              onChange={(v) => setCustomText(v.target.value)}
              value={customText}
              w="full"
            />
          </Stack>
          <Stack>
            <Text fontWeight="bold">Animation :</Text>
            <Select
              onChange={(v) => setAnimation(v.target.value as Animations)}
              value={animation}
              placeholder="Pilih Animasi"
            >
              {Object.keys(ANIMATION).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </Select>
            <Stack>
              <Text fontWeight="bold">Font :</Text>
              <Select
                onChange={(v) => setFont(v.target.value as Fonts)}
                value={animation}
                placeholder="Pilih Font"
              >
                {Object.keys(FONT).map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </Select>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Text fontWeight="bold">HTML</Text>
      <CopyBlock
        text={html_beautify(html, {
          indent_size: 2,
        })}
        language="html"
        theme={dracula}
      />
      <Text fontWeight="bold">CSS</Text>

      <CopyBlock
        text={css_beautify(css, {
          indent_size: 2,
        })}
        language="css"
        theme={dracula}
      />
    </Stack>
  );
}

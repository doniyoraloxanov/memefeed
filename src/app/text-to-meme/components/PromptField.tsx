import classnames from "classnames/bind";
import styles from "./prompt-field.module.scss";

import { Box } from "@/components/Box";
import { Divider } from "@/components/Divider";
import Icon from "@/components/Icon";
import IconButton from "@/components/IconButton";
import Paper from "@/components/Paper";
import { Typography } from "@/components/Typography";
import "keen-slider/keen-slider.min.css";

const cn = classnames.bind(styles);

type Props = {
  inputRef: React.RefObject<HTMLTextAreaElement>;
};

const PromptField = ({ inputRef }: Props) => {
  return (
    <Box className={cn("field-container")}>
      <Paper style={{}} className={cn("field")}>
        <div>
          <textarea
            rows={4}
            ref={inputRef}
            maxLength={150}
            className={cn("field__input")}
            placeholder="Enter Prompt..."
          />
        </div>

        <Box className={cn("field-actions")}>
          <div />
          <IconButton
            onClick={() => {
              if (inputRef.current) inputRef.current.value = "";
            }}
            icon="cancel"
          />
        </Box>
      </Paper>
      <Divider noLine />
      <Box className={cn("field__options")}>
        <Paper
          className={cn("field__option", {
            "field__option--disabled": true,
          })}
        >
          <Box className={cn("field__option__container")}>
            <Icon
              size="sm"
              icon="imagePlus"
              className={cn("field__option__icon")}
            />
            <Typography>Add Photo</Typography>
          </Box>
        </Paper>

        <Paper
          className={cn("field__option", {
            "field__option--disabled": true,
          })}
        >
          <Box className={cn("field__option__container")}>
            <Icon size="sm" icon="bulb" className={cn("gen__option__icon")} />
            <Typography>Inspiraton</Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default PromptField;

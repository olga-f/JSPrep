import { useState } from "react";
import Layout from "../../../lib/components/Layout";
import { FormControl } from "baseui/form-control";
import { Input, StyledInput } from "baseui/input";
import { Textarea } from "baseui/textarea";
import { Cell, Grid } from "baseui/layout-grid";
import { Button } from "baseui/button";
import { useMutation } from "@apollo/client/react/hooks";
import { CREATE_UNIT } from "../../../lib/graphql/mutations/Unit";
import {
  createUnit,
  createUnitVariables,
} from "../../../lib/graphql/mutations/Unit/__generated__/createUnit";
import { Tag, VARIANT as TAG_VARIANT } from "baseui/tag";
import { useStyletron } from "styletron-react";
import React from "react";

const InputReplacement = React.forwardRef(
  ({ tags, removeTag, ...restProps }: any, ref) => {
    const [css] = useStyletron();
    return (
      <div
        className={css({
          flex: "1 1 0%",
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
        })}
      >
        {tags.map((tag: string, index: number) => (
          <Tag
            variant={TAG_VARIANT.solid}
            onActionClick={() => removeTag(tag)}
            key={index}
          >
            {tag}
          </Tag>
        ))}
        <StyledInput ref={ref} {...restProps} />
      </div>
    );
  }
);

const CreateUnitPage = (): JSX.Element => {
  // start about:
  const [about, setAbout] = React.useState("");
  const [tags, setTags] = React.useState(["hello"]);
  const addTag = (tag: string) => {
    setTags([...tags, tag]);
  };
  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.keyCode) {
      // Enter
      case 13: {
        if (!about) return;
        addTag(about);
        setAbout("");
        return;
      }
      // Backspace
      case 8: {
        if (about || !tags.length) return;
        removeTag(tags[tags.length - 1]);
        return;
      }
    }
  };
  //end about

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const [addUnit] = useMutation<createUnit, createUnitVariables>(CREATE_UNIT, {
    variables: {
      input: {
        title: title,
        about: tags,
        description: description,
        imageUrl: img,
      },
    },
  });

  return (
    <Layout>
      <Grid>
        <Cell span={[4, 8, 10]}>
    
            <FormControl label="Title" caption="Input caption">
              <Input
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}
              />
            </FormControl>
            <Input
              placeholder={tags.length ? "" : "Enter A Tag"}
              value={about}
              onChange={(e) => setAbout(e.currentTarget.value)}
              overrides={{
                Input: {
                  style: { width: "auto", flexGrow: 1 },
                  component: InputReplacement,
                  props: {
                    tags: tags,
                    removeTag: removeTag,
                    onKeyDown: handleKeyDown,
                  },
                },
              }}
            />
            <FormControl label="Description" caption="Textarea caption">
              <Textarea
                value={description}
                onChange={(event) => setDescription(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl label="Image URL" caption="Input caption">
              <Input
                value={img}
                onChange={(event) => setImg(event.currentTarget.value)}
              />
            </FormControl>
            <Button onClick={() => addUnit()}>Create unit</Button>
 
        </Cell>
      </Grid>
    </Layout>
  );
};

export default CreateUnitPage;

import React from "react";
import Layout from "../../../lib/components/Layout";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Textarea } from "baseui/textarea";
import { Cell, Grid } from "baseui/layout-grid";
import { Button } from "baseui/button";
import { useMutation } from "@apollo/client/react/hooks";
import { CREATE_UNIT } from "../../../lib/graphql/mutations/Unit";
import {
  createUnit,
  createUnitVariables,
} from "../../../lib/graphql/mutations/Unit/__generated__/createUnit";

const CreateUnitPage = (): JSX.Element => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [img, setImg] = React.useState("");

  const [addUnit] = useMutation<createUnit, createUnitVariables>(CREATE_UNIT, {
    variables: {
      input: {
        title: title,
        description: description,
        imageUrl: img,
      },
    },
  });

  return (
    <Layout>
      <Grid>
        <Cell span={[4, 8, 10]}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addUnit();
            }}
          >
            <FormControl label="Title" caption="Input caption">
              <Input
                id="input-id"
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}
              />
            </FormControl>

            <FormControl label="Description" caption="Textarea caption">
              <Textarea
                id="textarea-id"
                value={description}
                onChange={(event) => setDescription(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl label="Image URL" caption="Input caption">
              <Input
                id="input-id"
                value={img}
                onChange={(event) => setImg(event.currentTarget.value)}
              />
            </FormControl>
            <Button>Create unit</Button>
          </form>
        </Cell>
      </Grid>
    </Layout>
  );
};

export default CreateUnitPage;

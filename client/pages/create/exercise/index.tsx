import { Button } from 'baseui/button';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Cell, Grid } from 'baseui/layout-grid';
import { OptionsT, Select } from 'baseui/select';
import { Textarea } from 'baseui/textarea';
import { useState } from 'react';

import { useMutation, useQuery } from '@apollo/client/react/hooks';

import Layout from '../../../lib/components/Layout';
import { ExerciseCategory } from '../../../lib/graphql/globalTypes';
import { CREATE_EXERCISE } from '../../../lib/graphql/mutations/Exercise';
import {
    createExercise, createExerciseVariables
} from '../../../lib/graphql/mutations/Exercise/__generated__/createExercise';
import { UNIT_LIST } from '../../../lib/graphql/queries';

const CreateExercisePage = (): JSX.Element => {
  const { data } = useQuery(UNIT_LIST);
  let unitOptions: OptionsT | undefined = [];
  if (data) {
    unitOptions = data.unitList;
  }

  const [value, setValue] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [code, setCode] = useState("");
  const [test, setTest] = useState("");
  const [category, setCategory] = useState([]);

  const [addExercise] = useMutation<createExercise, createExerciseVariables>(
    CREATE_EXERCISE,
    {
      variables: {
        data: {
          unit: value[0]?.id,
          name: title,
          description: description,
          content: content,
          code: code,
          test: test,
        },
        enum: category[0]?.id,
      },
    }
  );

  return (
    <Layout>
      <Grid>
        <Cell span={[4, 8, 10]}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addExercise();
            }}
          >
            <FormControl label="Select unit">
              <Select
                id="select-id"
                value={value}
                onChange={({ value }: any) => setValue(value)}
                options={unitOptions}
                labelKey="title"
                valueKey="id"
              />
            </FormControl>

            <FormControl label="Select category">
              <Select
                value={category}
                onChange={({ value }: any) => setCategory(value)}
                options={[
                  {
                    name: ExerciseCategory.CHALLENGE,
                    id: ExerciseCategory.CHALLENGE,
                  },
                  {
                    name: ExerciseCategory.TUTORIAL,
                    id: ExerciseCategory.CHALLENGE,
                  },
                ]}
                labelKey="name"
                valueKey="id"
              />
            </FormControl>
            <FormControl label="Title" caption="Input caption">
              <Input
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}
              />
            </FormControl>

            <FormControl label="Description" caption="Textarea caption">
              <Textarea
               
                value={description}
                onChange={(event) => setDescription(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl label="Content" caption="Textarea caption">
              <Textarea
               rows="40"
                value={content}
                onChange={(event) => setContent(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl label="Code" caption="Textarea caption">
              <Textarea
                value={code}
                onChange={(event) => setCode(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl label="Test" caption="Textarea caption">
              <Textarea
                value={test}
                onChange={(event) => setTest(event.currentTarget.value)}
              />
            </FormControl>

            <Button>Create exercise</Button>
          </form>
        </Cell>
      </Grid>
    </Layout>
  );
};

export default CreateExercisePage;

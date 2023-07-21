

interface ICourse {
    id: number;
    name: string;
    content: string;
    status: "published" | "draft" | "rejected";
    category: { id: number };
}

import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const CourseEdit: React.FC = () => {
    const { formProps, saveButtonProps, queryResult } = useForm({
        resource: "course",
        meta: {
            fields: ["id", "name", "age"],
          },
        warnWhenUnsavedChanges: true,
    });

    const CourseData = queryResult?.data?.data;

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                
            </Form>
        </Edit>
    );
};

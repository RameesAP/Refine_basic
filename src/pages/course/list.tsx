import { IResourceComponentsProps } from "@refinedev/core";
import { ICourse } from "../../interfaces";
import { List, Table, Tag, Space } from "antd";
import {
  useTable,
  getDefaultSortOrder,
  EditButton,
  ShowButton,
  DeleteButton,
  CreateButton,
} from "@refinedev/antd";

export const CourseList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorters } = useTable({
    resource: "course",
    meta: {
      fields: ["id", "name", "age"],
    },
    sorters: {
      initial: [
        {
          field: "age",
          order: "desc",
        },
      ],
    },
  });
  return (
    <>
      <List>
        <CreateButton resource="course" />
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title="ID" />
          <Table.Column
            dataIndex="name"
            title="Name"
            render={(_: any, record: any) => (
              <>
                {record?.name ? (
                  <Tag color="success">{record?.name}</Tag>
                ) : (
                  <Tag color="error">No Name</Tag>
                )}
              </>
            )}
          />
          <Table.Column
            dataIndex="age"
            title="Age"
            sorter={{ multiple: 1 }}
            defaultSortOrder={getDefaultSortOrder("title", sorters)}
          />
          <Table.Column
            title="Actions"
            dataIndex="actions"
            key="actions"
            render={(_: any, record: any) => (
              <Space>
                <EditButton size="small" recordItemId={record?.id} hideText />
                <ShowButton size="small" recordItemId={record?.id} hideText />
                <DeleteButton size="small" recordItemId={record?.id} hideText />
              </Space>
            )}
          />
        </Table>
      </List>
    </>
  );
};

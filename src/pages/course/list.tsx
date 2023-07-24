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
import { useState } from "react";
import { Button } from "antd/es/radio";
import Modal from "antd/es/modal/Modal";

export const CourseList: React.FC<IResourceComponentsProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { tableProps, sorters } = useTable({
    resource: "course",
    meta: {
      fields: ["id", "name", "age"]
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

        {/* Modal */}

        <Space>
          <CreateButton resource="course" />
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
        </Space>
        <Modal
          title="This is My Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            Hello This is Ramees
          </p>
          <p>How are you</p>
          <p>hahaahaa its worked</p>
        </Modal>

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

import React from 'react'
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import { Steps, Form, Icon, Input, Button,message  } from 'antd';
import RootInfo from './rootInfo';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
const Step = Steps.Step;

const steps = [
  {
    title: 'Distributor',
    content: 'First-content',
  },
  {
    title: 'Create Root',
    content: 'Second-content',
  },
  {
    title: 'Create Delivery Boy',
    content: 'Third-content',
  },
  {
    title: 'Create Customer',
    content: 'Last-content',
  },
];

class Distributor extends React.Component {
    constructor(){
        super();
        this.state = {
            current : 0,
        }
    }
  
  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    const current = this.state.current + 1;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({ current });
      }
    });
  };

  render() {
    const { getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const { getFieldDecorator } = this.props.form;
    // Only show error after a field is touched.
    const companyNameError = isFieldTouched('companyName') && getFieldError('companyName');
    const fullNameError = isFieldTouched('fullName') && getFieldError('fullName');
    const phoneNumberError = isFieldTouched('phoneNumber') && getFieldError('phoneNumber');

    const { current } = this.state;

    return (
        <div>
            <div>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                {/* <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                        Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                        Previous
                        </Button>
                    )}
                </div> */}
            </div>
            <h1>Step 1: Distributor Information </h1>
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item validateStatus={companyNameError ? 'error' : ''} help={companyNameError || ''}>
                    {getFieldDecorator('companyName', {
                        rules: [{ required: true, message: 'Please input your company name!' },
                                 { pattern: '[A-Za-z]', message: 'Please enter only characters!' }
                    ],
                    })(
                        <Input
                        prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Company Name"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item validateStatus={fullNameError ? 'error' : ''} help={fullNameError || ''}>
                    {getFieldDecorator('fullName', {
                        rules: [{ required: true, message: 'Please input your full name' },
                               { pattern: '[A-Za-z]', message: 'Please enter only characters!' }
                    ],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="fullName"
                        placeholder="Full Name"
                        />,
                    )}
                    </Form.Item>

                    <Form.Item validateStatus={phoneNumberError ? 'error' : ''} help={phoneNumberError || ''}>
                    {getFieldDecorator('phoneNumber', {
                        rules: [{ required: true, message: 'Please input your phone number' },
                                { pattern : '[0-9]', message: 'Please enter Numbers!' },
                                {max : 10 , message:'contact cannot be longer than 10 characters'}  
                    ],
                    })(
                        <Input
                        prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="number"
                        placeholder="Phone Number"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item></Form.Item>
                    <Form.Item>
                    <Button to="/rootnumber"  type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} >
                        Next 
                    </Button>
                    <NavLink to="/rootnumber">Root Info</NavLink>
                </Form.Item>
            </Form>
      </div>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'WrappedHorizontalLoginForm' })(Distributor);

export default WrappedHorizontalLoginForm;
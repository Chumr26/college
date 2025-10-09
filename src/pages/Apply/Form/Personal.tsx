import { Mail, MapPin, Phone, User } from 'lucide-react';

import { vietnamProvinces } from '../../../data/vietnamProvinces';
import { vietnamEthnicGroups } from '../../../data/vietnamEthnicGroups';
import { Field } from './Field';
import { Select } from '../../../components/Select';

import type { FormData } from '.';

export function Personal({
    formData,
    handleInputChange,
    handleSelectChange,
}: {
    formData: FormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange: (name: string, value: string) => void;
}) {
    return (
        <div className="bg-white border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 mb-8">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-4 border-black">
                <div className="bg-green-500 border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl tracking-tighter uppercase">
                    THÔNG TIN CÁ NHÂN
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Field
                    label="HỌ ĐỆM *"
                    id="lastMiddleName"
                    value={formData.lastMiddleName}
                    onChange={handleInputChange}
                    placeholder="Nhập họ đệm"
                />
                <Field
                    label="TÊN *"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Nhập tên"
                />
                <Select
                    name="gender"
                    label="Giới tính *"
                    placeholder="Nhập giới tính"
                    className="py-1"
                    value={formData.gender}
                    onChange={(e) =>
                        handleSelectChange('gender', e.target.value)
                    }
                    options={[
                        { label: 'Nam', value: 'Nam' },
                        { label: 'Nữ', value: 'Nữ' },
                    ]}
                />
                <Field
                    label="NGÀY SINH *"
                    id="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    placeholder="Nhập ngày sinh"
                    type="date"
                />
                <Select
                    name="placeOfBirth"
                    label="NƠI SINH *"
                    value={formData.placeOfBirth}
                    onChange={(e) =>
                        handleSelectChange('placeOfBirth', e.target.value)
                    }
                    placeholder="Nhập nơi sinh"
                    className="py-1"
                    options={vietnamProvinces.map((province) => ({ label: province, value: province }))}
                />
                <Select
                    name="ethnicGroup"
                    label="DÂN TỘC *"
                    value={formData.ethnicGroup}
                    onChange={(e) =>
                        handleSelectChange('ethnicGroup', e.target.value)
                    }
                    placeholder="Nhập dân tộc"
                    className="py-1"
                    options={vietnamEthnicGroups.map((group) => ({ label: group, value: group }))}
                />
                <Field
                    label="SỐ CMND/CCCD *"
                    id="identityCardNumber"
                    value={formData.identityCardNumber}
                    onChange={handleInputChange}
                    placeholder="Nhập số CMND/CCCD"
                    type="number"
                />
                <Field
                    label="NGÀY CẤP CMND/CCCD *"
                    id="identityCardIssueDate"
                    value={formData.identityCardIssueDate}
                    onChange={handleInputChange}
                    placeholder="Nhập ngày cấp CMND/CCCD"
                    type="date"
                />
                <Field
                    label="ĐIỆN THOẠI *"
                    icon={Phone}
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Nhập số điện thoại"
                    type="number"
                />
                <Field
                    label="EMAIL *"
                    icon={Mail}
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Nhập địa chỉ email"
                    type="email"
                />
                <Field
                    label="ĐỊA CHỈ *"
                    icon={MapPin}
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Nhập địa chỉ"
                    type="text"
                    colSpan="md:col-span-2"
                />
            </div>
        </div>
    );
}

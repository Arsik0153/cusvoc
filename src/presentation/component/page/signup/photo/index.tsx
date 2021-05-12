import React, { ChangeEvent, FC, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import { USERS_API } from 'constant/apiRoutes';
import { DISCOVER } from 'constant/routes';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import cameraSvg from 'presentation/svg/camera.svg?sprite';
import { Wrapper, Heading, ImageBlock, IconWrapper, FileInput, FileName, Button } from './styles';

const Photo: FC = () => {
    const router = useRouter();
    const [files, setFiles] = useState<FileList | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const currentFiles = e.target.files;
        setFiles(currentFiles);
    };

    const handleSubmit = () => {
        const oldData = localStorage.getItem('registerData');
        if (oldData && files) {
            const data = {
                ...JSON.parse(oldData),
                photo: files[0],
                popularity: 0,
                details: '',
            };
            const formData = new FormData();
            formData.append('confirmation_code', data.confirmation_code);
            formData.append('confirmation_time', data.confirmation_time);
            formData.append('details', '');
            formData.append('email', data.email);
            formData.append('first_name', data.first_name);
            formData.append('gender_id', data.gender_id);
            formData.append('last_name', data.last_name);
            formData.append('nickname', data.nickname);
            formData.append('photo', files[0]);
            formData.append('popularity', '0');
            axios
                .post(USERS_API, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((res) => {
                    // eslint-disable-next-line no-console
                    console.log(res.data);
                    router.push(DISCOVER);
                });
        }
    };

    return (
        <FilledContainer>
            <Wrapper>
                <Heading>Profile image</Heading>
                <ImageBlock htmlFor="pfp-upload">
                    Upload image
                    <IconWrapper>
                        <SvgSpriteIcon icon={cameraSvg} />
                    </IconWrapper>
                </ImageBlock>
                <FileName>{files && files[0] && files[0].name}</FileName>
                <FileInput id="pfp-upload" type="file" onChange={handleChange} accept="image/*" />
                <Button onClick={handleSubmit}>Sign up</Button>
            </Wrapper>
        </FilledContainer>
    );
};

export default Photo;

import {
  Body,
  Controller,
  Post,
  UploadedFile, UploadedFiles,
  UseInterceptors
} from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './ProductDTOs/create-product.dto';
import { diskStorage } from 'multer';
import { extendArrayMetadata } from '@nestjs/common/utils/extend-metadata.util';
import e from 'express';
import { extname } from 'path';

@Controller('product')
export class ProductController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename(
          req: e.Request,
          file: Express.Multer.File,
          callback: (error: Error | null, filename: string) => void,
        ) {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateProductDto,
  ) {
    console.log(file);
    console.log(body);
  }


  // eslint-disable-next-line prettier/prettier
  @Post('uploadFile2')
  @UseInterceptors(FileInterceptor('image'))
  uploadFile2(@UploadedFiles() file)
  {

  }


}

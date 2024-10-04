import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { CustomFieldProps } from '@/types'

const CustomField = ({form, name, label, placeholder, password=false}: CustomFieldProps) => {
  return (
    <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='text-40 form-label'> {label} </FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input 
                                placeholder={placeholder} 
                                className='input-class'
                                type={password ? 'password' : 'undefined'}
                                {...field}/>
                        </FormControl>
                        <FormMessage className='form-message mt-2'/>
                    </div>
            </div>
    )}/>
  )
}

export default CustomField
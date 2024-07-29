import * as fetchIntercept from 'fetch-intercept';

import { useEffect } from 'react'
import conf from '../conf';
import { useLoading } from '../Context/LoadingContext';

export const useFetchInterceptor = () => {
    const {setIsLoading} = useLoading();

    useEffect( () => {
     const unregister = fetchIntercept.register({
        request: function(url, config) {
            setIsLoading(true)
            config = { ...config},
            config.headers = config.headers || {},
            config.headers['Authorization'] = conf.appwriteProjectId

            return[ url, config];
        },

        requestError: function(error){
            setIsLoading(false)
            return Promise.reject(error)
        },

        response: function (response) {
            setIsLoading(false)
            return response
        },

        responseError: function (responseError) {
            setIsLoading(false)
            return Promise.reject(responseError)
        }
    });

    return () => {
        unregister();
    }
}, [setIsLoading]);

    return null;
};